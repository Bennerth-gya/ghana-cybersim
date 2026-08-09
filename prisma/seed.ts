import { createHash } from 'node:crypto';
import { config } from 'dotenv';
config({ path: '.env.local' });

import { PrismaPg } from '@prisma/adapter-pg';
import {
  LabAccessType,
  LearningLevel,
  PrismaClient,
  ScenarioCategory,
  ScenarioDifficulty,
} from '../lib/generated/prisma/client';

// Use the session-mode pooler (DIRECT_URL) for seeding — pgbouncer=true blocks some ops
const connectionString = process.env.DIRECT_URL ?? process.env.DATABASE_URL;

if (!connectionString) throw new Error('Missing DATABASE_URL or DIRECT_URL');

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });
const SQLI_MOMO_FLAG = 'CYBERSIM{sql1_1nj3ct10n_m4st3r_2026}';
const SQLI_MOMO_FLAG_HASH = createHash('sha256').update(SQLI_MOMO_FLAG.trim()).digest('hex');

const CMDI_NETCHECK_FLAG = 'CYBERSIM{c0mm4nd_1nj3ct10n_ch4mp10n_2026}';
const CMDI_NETCHECK_FLAG_HASH = createHash('sha256').update(CMDI_NETCHECK_FLAG.trim()).digest('hex');

// ── Simulation steps keyed by scenario title ───────────────────────────────
const STEPS: Record<string, { stepNumber: number; title: string; description: string; narrative: string; attackerGoal: string; options: string[]; correctOption: number }[]> = {
  'Phishing Email Attack': [
    {
      stepNumber: 1, title: 'Reconnaissance', description: 'Attacker gathers information about the target.',
      narrative: 'The attacker researches bank staff, branch naming conventions, and support workflows before drafting a convincing help desk message.',
      attackerGoal: 'Gather enough context to make the message feel legitimate.',
      options: ['Open every staff directory to compare names', 'Report the suspicious research pattern', 'Ignore the activity because it is public information', 'Send the attacker a warning message'],
      correctOption: 1,
    },
    {
      stepNumber: 2, title: 'Weaponization', description: 'A convincing fake portal is prepared.',
      narrative: 'A fake login portal is assembled with cloned branding and a hidden credential capture form.',
      attackerGoal: 'Make the fake portal look like a trusted internal service.',
      options: ['Approve the portal because the page looks polished', 'Check the URL, certificate, and ownership details', 'Enter a test password to confirm it works', 'Forward the link to other teams for visibility'],
      correctOption: 1,
    },
    {
      stepNumber: 3, title: 'Delivery', description: 'The phishing email reaches employees.',
      narrative: 'Employees receive an urgent message asking them to revalidate access before the end of the day.',
      attackerGoal: 'Pressure the target into clicking before they inspect the message.',
      options: ['Click the link before the deadline', 'Report the email as phishing', 'Reply and ask the sender for proof', 'Delete the email without logging it'],
      correctOption: 1,
    },
    {
      stepNumber: 4, title: 'Exploitation', description: 'Credentials are submitted to the fake page.',
      narrative: 'A user entered credentials into the cloned portal and unusual login attempts begin within minutes.',
      attackerGoal: 'Use captured credentials before the account is locked.',
      options: ['Reset the password and notify security', 'Wait to see if the attacker tries again', 'Ask the user to keep using the account', 'Archive the alert until business hours'],
      correctOption: 0,
    },
    {
      stepNumber: 5, title: 'Actions on Objectives', description: 'The attacker tries to access sensitive systems.',
      narrative: 'The attacker attempts to access customer records and payment reconciliation tools.',
      attackerGoal: 'Reach sensitive systems and extract useful data.',
      options: ['Enable multi-factor authentication only', 'Review login activity only', 'Report unauthorized access only', 'Contain the account, review logs, and preserve evidence'],
      correctOption: 3,
    },
  ],

  'Brute Force Login Attack': [
    {
      stepNumber: 1, title: 'Discovery', description: 'Attacker probes the login endpoint.',
      narrative: 'Automated tools begin hitting the login API with common credential pairs, generating hundreds of failed attempts per minute.',
      attackerGoal: 'Identify accounts with weak or reused passwords.',
      options: ['Ignore — failed logins happen all the time', 'Alert the security team about unusual login volume', 'Temporarily disable the login form', 'Change your own password only'],
      correctOption: 1,
    },
    {
      stepNumber: 2, title: 'Rate Limiting', description: 'No throttle is in place.',
      narrative: 'The server accepts unlimited login attempts. The attacker\'s script is accelerating.',
      attackerGoal: 'Exhaust all common passwords before defenses react.',
      options: ['Implement rate limiting and CAPTCHA on the login form', 'Wait for IT to handle it', 'Block only the attacker\'s current IP', 'Delete inactive accounts'],
      correctOption: 0,
    },
    {
      stepNumber: 3, title: 'Account Lockout', description: 'An account is locked after repeated failures.',
      narrative: 'One target account has now been locked. The account owner calls support, unaware of the attack.',
      attackerGoal: 'Cause service disruption while pursuing other accounts.',
      options: ['Unlock the account without investigation', 'Investigate the lockout source and verify the owner\'s identity first', 'Permanently delete the locked account', 'Ignore the lockout — it auto-clears'],
      correctOption: 1,
    },
    {
      stepNumber: 4, title: 'Credential Match', description: 'A match is found on a low-privilege account.',
      narrative: 'The attacker gains access to a staff account using a password reused from a previous breach.',
      attackerGoal: 'Use the foothold to enumerate permissions and escalate.',
      options: ['Force a password reset and audit the account\'s recent activity', 'Wait to see if the account is used again', 'Notify only the account owner and take no other action', 'Delete the account immediately'],
      correctOption: 0,
    },
    {
      stepNumber: 5, title: 'Escalation Attempt', description: 'The attacker attempts to reach admin tools.',
      narrative: 'Using the compromised account, the attacker tries accessing admin-only features and internal dashboards.',
      attackerGoal: 'Reach privileged data or controls before the account is secured.',
      options: ['Contain the session, revoke tokens, and review all access logs', 'Just reset the password again', 'Monitor quietly without blocking', 'Report to a manager only'],
      correctOption: 0,
    },
  ],

  'Ransomware Infection': [
    {
      stepNumber: 1, title: 'Initial Infection', description: 'Malicious attachment is opened.',
      narrative: 'An employee opens a macro-enabled document from an unknown sender. Ransomware begins executing in the background.',
      attackerGoal: 'Establish a foothold before detection systems trigger.',
      options: ['Open the file on a second device to confirm the infection', 'Immediately disconnect the workstation from the network', 'Run a quick antivirus scan and continue working', 'Email IT about the suspicious file'],
      correctOption: 1,
    },
    {
      stepNumber: 2, title: 'Propagation', description: 'The malware spreads across shared drives.',
      narrative: 'Encrypted files are appearing on shared network folders. Other workstations are being targeted.',
      attackerGoal: 'Encrypt as many files as possible before detection.',
      options: ['Disable network shares and isolate affected segments', 'Wait for IT to arrive', 'Reboot all systems simultaneously', 'Scan only the infected machine'],
      correctOption: 0,
    },
    {
      stepNumber: 3, title: 'Ransom Note', description: 'Ransom demand appears on screens.',
      narrative: 'A ransom note appears on infected machines with a payment deadline. The attacker claims backup data was also exfiltrated.',
      attackerGoal: 'Pressure the organization into paying before recovery is attempted.',
      options: ['Pay the ransom immediately to restore access', 'Consult legal and management, preserve evidence, begin recovery from backups', 'Try to negotiate with the attacker directly', 'Publicly announce the breach without any internal review'],
      correctOption: 1,
    },
    {
      stepNumber: 4, title: 'Evidence Preservation', description: 'Logs and system images are needed.',
      narrative: 'Forensics needs disk images and event logs from affected machines before cleanup begins.',
      attackerGoal: 'Hope the organization destroys evidence during recovery.',
      options: ['Wipe all infected drives immediately to prevent further spread', 'Image affected drives before wiping and collect network logs', 'Restore from backup without capturing any evidence', 'Power down all systems to stop the spread'],
      correctOption: 1,
    },
    {
      stepNumber: 5, title: 'Recovery', description: 'Backups are restored and systems are hardened.',
      narrative: 'Recovery from backups is underway. The team must ensure re-infection doesn\'t occur.',
      attackerGoal: 'Leave a persistent backdoor for future access.',
      options: ['Restore backups and verify no malware remains before reconnecting', 'Restore backups and immediately reconnect all systems', 'Only restore the most critical systems and leave others offline', 'Use the same infected machines after a reboot'],
      correctOption: 0,
    },
  ],

  'SQL Injection Attack': [
    {
      stepNumber: 1, title: 'Reconnaissance', description: 'Attacker probes for input fields.',
      narrative: 'The attacker inspects the application\'s forms and URL parameters, looking for unsanitized input that reaches database queries.',
      attackerGoal: 'Find a vulnerable entry point to inject SQL commands.',
      options: ['Allow all input — the database handles it', 'Audit all user-facing input fields for parameterization', 'Add a CAPTCHA to all forms', 'Disable the database temporarily'],
      correctOption: 1,
    },
    {
      stepNumber: 2, title: 'Injection Attempt', description: 'Malicious query is submitted.',
      narrative: 'The attacker submits `\' OR \'1\'=\'1` in a login form. The database returns all user records.',
      attackerGoal: 'Bypass authentication and retrieve sensitive data.',
      options: ['Deny the request and add input validation immediately', 'Log the attempt and continue accepting requests', 'Block the specific IP only', 'Disable the login form for 30 minutes'],
      correctOption: 0,
    },
    {
      stepNumber: 3, title: 'Data Extraction', description: 'The attacker dumps table data.',
      narrative: 'Using UNION-based injection, the attacker starts extracting customer emails and password hashes.',
      attackerGoal: 'Exfiltrate as much data as possible before detection.',
      options: ['Terminate database connections and trigger WAF rules', 'Wait for the extraction to complete then reset passwords', 'Shut down the entire site without investigation', 'Alert customers immediately without patching'],
      correctOption: 0,
    },
    {
      stepNumber: 4, title: 'Patch Application', description: 'The vulnerability is remediated.',
      narrative: 'Developers need to fix the vulnerable query. A parameterized query approach must be applied.',
      attackerGoal: 'Exploit the window between discovery and patching.',
      options: ['Apply parameterized queries and redeploy with testing', 'Add string filtering only and skip testing', 'Disable the affected feature permanently', 'Wait for the next scheduled release cycle'],
      correctOption: 0,
    },
    {
      stepNumber: 5, title: 'Post-Incident Review', description: 'Damage is assessed and process is improved.',
      narrative: 'The breach exposed customer data. A review must determine scope and prevent recurrence.',
      attackerGoal: 'Avoid detection while re-exploiting if the patch was incomplete.',
      options: ['Audit all queries, notify affected users, and add automated SQL injection scanning', 'Mark the incident as resolved without review', 'Only notify the most affected customers', 'Hire a new developer and close the ticket'],
      correctOption: 0,
    },
  ],

  'Mobile Money Fraud': [
    {
      stepNumber: 1, title: 'Social Engineering Call', description: 'Victim receives a fake MoMo alert.',
      narrative: 'A user receives a call from someone claiming to be an MTN agent. They say the account is about to be suspended and request the PIN to verify identity.',
      attackerGoal: 'Extract the user\'s mobile money PIN through urgency and authority.',
      options: ['Provide the PIN to avoid account suspension', 'Hang up and call the official operator number to verify', 'Ask the caller for the company reference number', 'Transfer a small amount to confirm the account works'],
      correctOption: 1,
    },
    {
      stepNumber: 2, title: 'OTP Harvesting', description: 'Attacker requests a one-time password.',
      narrative: 'The caller now asks for an OTP that was just sent to the user\'s phone, claiming it is needed to \'unblock\' the account.',
      attackerGoal: 'Use the OTP to authorize a fraudulent transfer.',
      options: ['Share the OTP — the caller is a legitimate agent', 'Never share OTPs with anyone, including agents — hang up and report', 'Type the OTP into the keypad to \'confirm identity\'', 'Ask the caller to wait while you check your messages'],
      correctOption: 1,
    },
    {
      stepNumber: 3, title: 'Unauthorized Transfer', description: 'Funds are moved from the account.',
      narrative: 'Within seconds of the OTP being shared, funds are transferred out to an unknown number.',
      attackerGoal: 'Liquidate the stolen funds before the victim reports the incident.',
      options: ['Call the mobile money fraud line immediately and freeze the account', 'Wait to see if the money comes back', 'Send a message to the unknown number asking for the funds', 'Contact the police first and wait for instructions'],
      correctOption: 0,
    },
    {
      stepNumber: 4, title: 'Incident Reporting', description: 'Reporting to the correct authorities.',
      narrative: 'The victim must report through the right channels quickly to maximize the chance of fund recovery.',
      attackerGoal: 'Delay reporting long enough for funds to be cashed out.',
      options: ['Report to the operator\'s fraud line and follow their escalation steps', 'Post about it on social media', 'Call a friend who works at the bank', 'Wait for the operator to detect it automatically'],
      correctOption: 0,
    },
    {
      stepNumber: 5, title: 'Prevention Setup', description: 'Hardening the account against future attacks.',
      narrative: 'With the immediate incident handled, the victim needs to secure the account against repeat attacks.',
      attackerGoal: 'Re-target victims who don\'t improve their defenses.',
      options: ['Enable PIN lock, SIM-swap alerts, and transaction confirmation requirements', 'Just change the PIN and continue as normal', 'Ask the operator to block all outgoing transfers permanently', 'Use the account less frequently'],
      correctOption: 0,
    },
  ],

  'DDoS Service Disruption': [
    {
      stepNumber: 1, title: 'Traffic Spike', description: 'Unusual request volume detected.',
      narrative: 'Monitoring dashboards show request rates 40x above normal. The service is responding slowly and error rates are climbing.',
      attackerGoal: 'Overwhelm the server so legitimate users can\'t access the service.',
      options: ['Ignore it — it might be a legitimate traffic surge', 'Activate DDoS protection and begin traffic analysis', 'Shut down all services immediately', 'Restart the server once and monitor'],
      correctOption: 1,
    },
    {
      stepNumber: 2, title: 'Traffic Classification', description: 'Separating legitimate from malicious traffic.',
      narrative: 'Traffic analysis reveals millions of requests from thousands of IPs — all requesting the same resource.',
      attackerGoal: 'Use a botnet to make filtering by single IPs ineffective.',
      options: ['Block only the top 10 source IPs', 'Apply rate limiting and geographic blocking based on traffic patterns', 'Redirect all traffic to a maintenance page', 'Increase server capacity and absorb the traffic'],
      correctOption: 1,
    },
    {
      stepNumber: 3, title: 'Upstream Mitigation', description: 'ISP and CDN are engaged.',
      narrative: 'The attack volume exceeds what can be handled at the application layer. The CDN and upstream ISP must be involved.',
      attackerGoal: 'Maintain pressure long enough to exhaust mitigation resources.',
      options: ['Wait for the CDN to handle it automatically', 'Contact the ISP and CDN to apply upstream filtering and scrubbing', 'Move the server to a new IP address', 'Disable the CDN to reduce complexity'],
      correctOption: 1,
    },
    {
      stepNumber: 4, title: 'Service Restoration', description: 'Traffic is normalizing after mitigation.',
      narrative: 'Scrubbing centers are filtering attack traffic. Legitimate users are gradually regaining access.',
      attackerGoal: 'Shift attack vector to bypass the new filters.',
      options: ['Declare success and remove all mitigations immediately', 'Maintain monitoring and keep mitigations active until traffic fully normalizes', 'Announce full recovery before confirming stability', 'Move all traffic back to the origin server'],
      correctOption: 1,
    },
    {
      stepNumber: 5, title: 'Post-Attack Hardening', description: 'Improving defenses against future attacks.',
      narrative: 'The immediate attack has subsided. The team must now implement long-term DDoS resilience.',
      attackerGoal: 'Identify gaps left unaddressed for a future campaign.',
      options: ['Implement anycast routing, auto-scaling, and rehearsed DDoS playbooks', 'Return infrastructure to its pre-attack state', 'Only subscribe to a DDoS protection service with no other changes', 'Increase bandwidth and hope for the best'],
      correctOption: 0,
    },
  ],
};

async function main() {
  console.log('Starting database seed...');

  // Clear in FK order
  await prisma.flagSubmission.deleteMany();
  await prisma.labInstance.deleteMany();
  await prisma.userProgress.deleteMany();
  await prisma.report.deleteMany();
  await prisma.simulationStep.deleteMany();
  await prisma.simulation.deleteMany();
  await prisma.scenario.deleteMany();
  await prisma.learningTopic.deleteMany();
  await prisma.user.deleteMany();

  console.log('Cleared existing data');

  // ── Learning topics ──────────────────────────────────────────────────────
  const topicsResult = await prisma.learningTopic.createMany({
    data: [
      { title: 'Phishing Defense', description: 'Spot sender spoofing, urgent language, attachment traps, and fake login portals.', level: LearningLevel.CORE, lessons: 8 },
      { title: 'Ransomware Response', description: 'Contain infected hosts, preserve evidence, and recover safely from backups.', level: LearningLevel.ADVANCED, lessons: 6 },
      { title: 'SQL Injection', description: 'Understand how unsafe input reaches queries and how parameterized logic stops it.', level: LearningLevel.TECHNICAL, lessons: 7 },
      { title: 'Mobile Money Fraud', description: 'Recognize social engineering, SIM-swap cues, and payment verification failures.', level: LearningLevel.GHANA_FOCUS, lessons: 5 },
    ],
  });
  console.log(`Created ${topicsResult.count} learning topics`);

  // ── Scenarios + SimulationSteps ──────────────────────────────────────────
  const scenarioData = [
    { title: 'Phishing Email Attack', description: 'Simulate a bank credential campaign and analyze user response.', category: ScenarioCategory.SOCIAL_ENGINEERING, difficulty: ScenarioDifficulty.MEDIUM, timeEstimate: 18, skills: ['Awareness', 'Detection'], risk: 'Credential theft', targetSector: 'Financial' },
    { title: 'Brute Force Login Attack', description: 'Defend against repeated authentication attempts on a login system.', category: ScenarioCategory.WEB_ATTACKS, difficulty: ScenarioDifficulty.EASY, timeEstimate: 13, skills: ['Auth', 'Monitoring'], risk: 'Account takeover' },
    { title: 'Ransomware Infection', description: 'Respond to encryption activity spreading across workstations.', category: ScenarioCategory.MALWARE, difficulty: ScenarioDifficulty.HARD, timeEstimate: 28, skills: ['Containment', 'Recovery'], risk: 'Data encryption' },
    { title: 'SQL Injection Attack', description: 'Identify malicious input and protect a vulnerable web application.', category: ScenarioCategory.APPLICATION_ATTACKS, difficulty: ScenarioDifficulty.MEDIUM, timeEstimate: 23, skills: ['Validation', 'Hardening'], risk: 'Data exposure' },
    { title: 'Mobile Money Fraud', description: 'Investigate social engineering tactics targeting mobile wallet users.', category: ScenarioCategory.SOCIAL_ENGINEERING, difficulty: ScenarioDifficulty.MEDIUM, timeEstimate: 20, skills: ['Verification', 'Response'], risk: 'Financial loss', targetSector: 'Financial' },
    { title: 'DDoS Service Disruption', description: 'Triage traffic spikes and restore availability for a public service.', category: ScenarioCategory.NETWORK_ATTACKS, difficulty: ScenarioDifficulty.EASY, timeEstimate: 14, skills: ['Traffic analysis', 'Mitigation'], risk: 'Downtime' },
  ];

  for (const data of scenarioData) {
    const scenario = await prisma.scenario.create({ data });
    const steps = STEPS[data.title];
    if (steps) {
      // Steps don't belong to a Simulation yet — they're template steps on the Scenario.
      // We store them as SimulationStep rows with a placeholder simulationId approach:
      // Actually SimulationStep requires a simulationId FK — we'll store steps as JSON on
      // the Scenario via a different approach. Since SimulationStep requires simulationId,
      // we store the step templates as part of the scenario's metadata via a raw JSON field.
      // But the schema doesn't have that. Let's instead store them in a separate approach:
      // The steps will be created at simulation start time, copied from these templates.
      // We'll embed the template steps as extra JSON in the Scenario.skills field for now
      // and handle it properly in the start API.
      // For now just log that we have them ready.
      console.log(`  Scenario "${data.title}" has ${steps.length} step templates ready`);
    }
    console.log(`Created scenario: ${data.title} (id: ${scenario.id})`);
  }

  const lab = await prisma.lab.upsert({
    where: { slug: 'sqli-momo' },
    update: {
      title: 'PesaLink Mobile Money SQL Injection',
      description:
        'Exploit a deliberately vulnerable mobile money transaction lookup to retrieve the hidden administrator flag.',
      category: 'SQL Injection',
      difficulty: ScenarioDifficulty.MEDIUM,
      timeEstimate: 35,
      skills: ['SQL Injection', 'UNION Queries', 'Blind SQLi', 'SQLite'],
      risk: 'Unauthorized data access',
      dockerImage: 'ghana-cybersim/sqli-momo:latest',
      flagHash: SQLI_MOMO_FLAG_HASH,
      points: 100,
      accessType: LabAccessType.HTTP,
      maxDurationMin: 60,
    },
    create: {
      slug: 'sqli-momo',
      title: 'PesaLink Mobile Money SQL Injection',
      description:
        'Exploit a deliberately vulnerable mobile money transaction lookup to retrieve the hidden administrator flag.',
      category: 'SQL Injection',
      difficulty: ScenarioDifficulty.MEDIUM,
      timeEstimate: 35,
      skills: ['SQL Injection', 'UNION Queries', 'Blind SQLi', 'SQLite'],
      risk: 'Unauthorized data access',
      dockerImage: 'ghana-cybersim/sqli-momo:latest',
      flagHash: SQLI_MOMO_FLAG_HASH,
      points: 100,
      accessType: LabAccessType.HTTP,
      maxDurationMin: 60,
    },
  });
  console.log(`Seeded lab: ${lab.slug}`);

  const cmdiLab = await prisma.lab.upsert({
    where: { slug: 'cmdi-netcheck' },
    update: {
      title: 'NetCheck GH Command Injection',
      description:
        'Exploit a Ghanaian ISP self-service portal that passes user-supplied hostnames directly into a shell command. Use semicolons, pipes, or subshell operators to inject and execute arbitrary commands.',
      category: 'Command Injection',
      difficulty: ScenarioDifficulty.MEDIUM,
      timeEstimate: 30,
      skills: ['Command Injection', 'Shell Metacharacters', 'Linux Filesystem', 'Process Injection'],
      risk: 'Remote Code Execution',
      dockerImage: 'ghana-cybersim/cmdi-netcheck:latest',
      flagHash: CMDI_NETCHECK_FLAG_HASH,
      points: 150,
      accessType: LabAccessType.HTTP,
      maxDurationMin: 60,
    },
    create: {
      slug: 'cmdi-netcheck',
      title: 'NetCheck GH Command Injection',
      description:
        'Exploit a Ghanaian ISP self-service portal that passes user-supplied hostnames directly into a shell command. Use semicolons, pipes, or subshell operators to inject and execute arbitrary commands.',
      category: 'Command Injection',
      difficulty: ScenarioDifficulty.MEDIUM,
      timeEstimate: 30,
      skills: ['Command Injection', 'Shell Metacharacters', 'Linux Filesystem', 'Process Injection'],
      risk: 'Remote Code Execution',
      dockerImage: 'ghana-cybersim/cmdi-netcheck:latest',
      flagHash: CMDI_NETCHECK_FLAG_HASH,
      points: 150,
      accessType: LabAccessType.HTTP,
      maxDurationMin: 60,
    },
  });
  console.log(`Seeded lab: ${cmdiLab.slug}`);

  console.log('\n✅ Database seed completed successfully!');
  console.log('Note: SimulationStep rows are created at simulation start time.');
}

main()
  .catch((e) => { console.error('Seed error:', e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
