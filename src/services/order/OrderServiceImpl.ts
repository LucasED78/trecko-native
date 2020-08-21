import OrderService from "./OrderService";
import api from "../api";

class OrderServiceImpl implements OrderService {
  async get(code: string): Promise<any> {
    try {
      const response =  await api.get(`/${code}`);

      return response.data[0];
    } catch(e){
      throw e;
    }
  }
}

export default OrderServiceImpl;