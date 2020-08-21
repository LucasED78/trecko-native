export default interface OrderService {
  get(code: string): Promise<any>;
}