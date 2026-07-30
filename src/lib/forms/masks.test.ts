import { describe, expect, it } from "vitest";

import { maskCep, maskCnpj, maskCpf, maskPhone } from "@/lib/forms/masks";

describe("masks", () => {
  it("formats CPF", () => {
    expect(maskCpf("12345678901")).toBe("123.456.789-01");
  });

  it("formats CNPJ", () => {
    expect(maskCnpj("12345678000199")).toBe("12.345.678/0001-99");
  });

  it("formats phone and CEP", () => {
    expect(maskPhone("65999998888")).toBe("(65) 99999-8888");
    expect(maskCep("78000000")).toBe("78000-000");
  });
});
