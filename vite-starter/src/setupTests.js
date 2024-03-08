// https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/src/test/setup.ts
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";


afterEach(() => {
    cleanup();
});