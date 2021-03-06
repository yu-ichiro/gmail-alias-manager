export interface RootState {
  address: string;
  aliasBlueprint: string;
  aliases: string[];
  counts: Record<string, number>;
  aliasPropComponents: Record<string, string[]>;
}
