export class PermissionError extends Error {
  constructor(message: string = 'Permission not granted') {
    super(message);
    this.name = 'PermissionError';
  }
}
