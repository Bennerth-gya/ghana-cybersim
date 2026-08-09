DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS admin_secrets;

CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  full_name TEXT NOT NULL,
  phone_number TEXT NOT NULL UNIQUE,
  region TEXT NOT NULL,
  account_balance REAL NOT NULL
);

CREATE TABLE transactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  reference TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  recipient TEXT NOT NULL,
  amount REAL NOT NULL,
  status TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE admin_secrets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  flag TEXT NOT NULL,
  note TEXT NOT NULL
);

INSERT INTO users (full_name, phone_number, region, account_balance) VALUES
  ('Akosua Mensah', '0245550101', 'Greater Accra', 1542.75),
  ('Kojo Owusu', '0555550102', 'Ashanti', 832.40),
  ('Ama Serwaa', '0205550103', 'Central', 276.95),
  ('Yaw Boateng', '0275550104', 'Eastern', 4920.10),
  ('Efua Appiah', '0505550105', 'Western', 118.25);

INSERT INTO transactions (reference, phone_number, recipient, amount, status, created_at) VALUES
  ('PSL-2407-A19', '0245550101', 'Kwame Mensah', 125.50, 'SETTLED', '2026-07-22 08:15:00'),
  ('PSL-2407-A20', '0245550101', 'Electricity Company', 310.00, 'PENDING', '2026-07-23 12:05:00'),
  ('PSL-2407-B42', '0555550102', 'Adwoa Market', 48.00, 'SETTLED', '2026-07-24 09:30:00'),
  ('PSL-2407-C11', '0205550103', 'Kumasi Supplies', 89.99, 'FAILED', '2026-07-24 14:42:00'),
  ('PSL-2407-D08', '0275550104', 'Takoradi Parts', 1040.00, 'SETTLED', '2026-07-25 16:20:00'),
  ('PSL-2407-E77', '0505550105', 'Tema Coldstore', 67.20, 'SETTLED', '2026-07-26 11:09:00');

INSERT INTO admin_secrets (flag, note) VALUES
  ('CYBERSIM{sql1_1nj3ct10n_m4st3r_2026}', 'Final flag for the SQL injection lab.');
