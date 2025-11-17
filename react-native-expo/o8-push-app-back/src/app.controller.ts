import { Body, Controller, Post } from '@nestjs/common';
import { PushNotificationService } from './push-notification/push-notification.service';

@Controller()
export class AppController {
  constructor(
    private readonly pushNotificationService: PushNotificationService,
  ) {}

  @Post('/send-notification')
  sendNotification(@Body() body: { to: string[] }) {
    void this.pushNotificationService.sendNotification(body.to);
  }
}
