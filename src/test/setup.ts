// Mock browser API for testing
export const mockStorage = {
  sync: {
    get: vi.fn(),
    set: vi.fn(),
  },
};

global.browser = {
  storage: mockStorage,
} as any;
