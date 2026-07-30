import { describe, expect, it } from "vitest";

import { can } from "@/lib/auth/capabilities";

describe("capabilities", () => {
  it("gives admin full panel capabilities", () => {
    expect(can("admin", "approveMembership")).toBe(true);
    expect(can("admin", "viewIntegrityCases")).toBe(true);
  });

  it("limits filiado to own membership", () => {
    expect(can("filiado", "viewOwnMembership")).toBe(true);
    expect(can("filiado", "approveMembership")).toBe(false);
  });
});
