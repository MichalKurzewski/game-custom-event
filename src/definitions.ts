export interface GamePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
