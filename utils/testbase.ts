import { test as base } from "@playwright/test";
import testData from "./testData.json";

// Define a custom type so we can use 'data' (from JSON) in our tests
type MyFixtures = {
  data: typeof testData;
type MyFixtures = {
  data: typeof testData;
};
// Extending the base test with our custom fixture
export const fixture = base.extend<MyFixtures>({
  data: testData, // Providing 'data' fixture to be used in tests
});
