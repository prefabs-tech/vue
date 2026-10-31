import { vi } from "vitest";

vi.mock("../../../auth-provider", () => ({
  auth: vi.fn(() => ({
    doLogout: vi.fn().mockResolvedValue(undefined),
    isProfileCompleted: vi.fn().mockResolvedValue(true),
  })),
  authConfig: undefined,
  default: vi.fn(),
}));

import "./common.steps";
import "./login-form.steps";
import "./user-session.steps";
