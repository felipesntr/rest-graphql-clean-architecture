import { Request, Response } from 'express';
import { Controller } from '../../presentation/protocols';
export const adapterRoute = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const httpResponse = await controller.handle();
        res.status(httpResponse.statusCode).json(httpResponse.data);
    }
}