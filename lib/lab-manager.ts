export type LabProvisionResult = {
  instanceId: string;
  accessUrl: string;
  expiresAt: string;
};

export type LabStatusResult = {
  status: "running" | "expired" | "destroyed" | "not-found" | "failed";
  expiresAt?: string;
};

function managerBaseUrl() {
  const baseUrl = process.env.LAB_MANAGER_URL;
  if (!baseUrl) {
    throw new Error("Missing LAB_MANAGER_URL");
  }
  return baseUrl.replace(/\/$/, "");
}

function managerHeaders() {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (process.env.LAB_MANAGER_API_KEY) {
    headers["x-lab-manager-key"] = process.env.LAB_MANAGER_API_KEY;
  }

  return headers;
}

async function parseManagerResponse<T>(response: Response): Promise<T> {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message =
      typeof data.error === "string"
        ? data.error
        : `Lab manager returned ${response.status}`;
    throw new Error(message);
  }

  return data as T;
}

export async function provisionLabInstance(
  labSlug: string,
  userId: string,
): Promise<LabProvisionResult> {
  const response = await fetch(`${managerBaseUrl()}/instances`, {
    method: "POST",
    headers: managerHeaders(),
    body: JSON.stringify({ labId: labSlug, userId }),
    cache: "no-store",
  });

  return parseManagerResponse<LabProvisionResult>(response);
}

export async function destroyLabInstance(instanceId: string) {
  const response = await fetch(`${managerBaseUrl()}/instances/${instanceId}`, {
    method: "DELETE",
    headers: managerHeaders(),
    cache: "no-store",
  });

  if (response.status === 404) {
    return { status: "not-found" as const };
  }

  return parseManagerResponse<{ status: "destroyed"; instanceId: string }>(response);
}

export async function getLabInstanceStatus(instanceId: string): Promise<LabStatusResult> {
  const response = await fetch(`${managerBaseUrl()}/instances/${instanceId}/status`, {
    method: "GET",
    headers: managerHeaders(),
    cache: "no-store",
  });

  if (response.status === 404) {
    return { status: "not-found" };
  }

  return parseManagerResponse<LabStatusResult>(response);
}
