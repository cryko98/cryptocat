export interface TokenStats {
  totalSupply: string;
  ticker: string;
  name: string;
  contractAddress: string;
  tax: string;
  liquidity: string;
  network: string;
}

export interface MemeCard {
  id: string;
  title: string;
  imageUrl: string;
  tag: string;
}

export interface StoryChapter {
  title: string;
  text: string;
  isBefore: boolean;
  highlight: string;
}
