export interface formState {
  isSuccess: boolean;
  isError: boolean;
  errors: {
    [key: string]: string[] | undefined;
  };
}
