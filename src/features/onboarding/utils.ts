export const isOnboardingComplete = async (): Promise<boolean> => {
  const { apiKey } = await browser.storage.sync.get("apiKey");
  return !!apiKey;
};
