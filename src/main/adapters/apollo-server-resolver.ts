import { Controller } from '../../presentation/protocols';

export const adapterResolver = async (controller: Controller): Promise<any> => {
    const httpResponse = await controller.handle()
    return httpResponse.data
}