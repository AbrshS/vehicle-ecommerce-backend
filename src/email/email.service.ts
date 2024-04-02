import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as Handlebars from 'handlebars';
import * as fs from 'fs-extra';
import { join } from 'path';
require('dotenv').config();

@Injectable()
export class EmailService {
  /**
   *
   * @param recipient
   * @param message
   * @returns
   *
   * Send security alert while changing the password.
   */
  sendSecurityAlert(recipient: string, fullName: string) {
    return new Promise((resolve, reject) => {
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SENDER_EMAIL,
          pass: process.env.PASSWORD,
        },
      });

      const cssPath = join(process.cwd(), 'templates', 'asset', 'css', 'all.css');
      const css = fs.readFileSync(cssPath, 'utf8');

      const templatePath = join(process.cwd(), 'templates', 'security_alert.hbs');
      const template = fs.readFileSync(templatePath, 'utf8');

      const compiledTemplate = Handlebars.compile(template);
      const html = compiledTemplate({
        fullName: fullName,
        css: css,
      });

      const mail_configs = {
        from: process.env.SENDER_EMAIL,
        to: recipient,
        subject: `Security alert from Nobel E-Commerce`,
        html: html,
      };
      transporter.sendMail(mail_configs, function (error, info) {
        if (error) {
          throw new InternalServerErrorException(`Error while sending`);
        }
        return resolve({
          message: 'Email Successfully sent.',
        });
      });
    });
  }

  /**
   *
   * @param recipient
   * @param message
   * @returns
   *
   * send verification code while forgot password.
   */
  sendVerificationCode(recipient: string, code: string, fullName: string) {
    return new Promise((resolve, reject) => {
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SENDER_EMAIL,
          pass: process.env.PASSWORD,
        },
      });

      const cssPath = join(process.cwd(), 'templates', 'asset', 'css', 'all.css');
      const css = fs.readFileSync(cssPath, 'utf8');

      const templatePath = join(process.cwd(), 'templates', 'verification_code.hbs');
      const template = fs.readFileSync(templatePath, 'utf8');

      const compiledTemplate = Handlebars.compile(template);
      const html = compiledTemplate({
        code: code,
        fullName: fullName,
        css: css,
      });

      const mail_configs = {
        from: process.env.SENDER_EMAIL,
        to: recipient,
        subject: `Verification code: ${code}`,
        html: html,
      };

      transporter.sendMail(mail_configs, function (error, info) {
        if (error) {
          return new InternalServerErrorException(`Error while sending...`);
        }
        return resolve({
          message: 'We have already sent an email via this email.',
        });
      });
    });
  }

  /**
   *
   * @param recipient
   * @param password
   * @returns Object message.
   *
   * Send default password for the uses, while new account creation.
   */

  sendNoticeAccountCreated(recipient: string, username: string, password: string, fullName: string) {
    // console.log('recipient, username, password, fullName: ', recipient, username, password, fullName)
    return new Promise((resolve, reject) => {
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SENDER_EMAIL,
          pass: process.env.PASSWORD,
        },
      });

      const cssPath = join(process.cwd(), 'templates', 'asset', 'css', 'all.css');
      const css = fs.readFileSync(cssPath, 'utf8');

      const templatePath = join(process.cwd(), 'templates', 'account_created.hbs');
      const template = fs.readFileSync(templatePath, 'utf8');

      const compiledTemplate = Handlebars.compile(template);
      const html = compiledTemplate({
        username,
        password,
        fullName,
        css,
      });

      const mail_configs = {
        from: process.env.SENDER_EMAIL,
        to: recipient,
        subject: `Your Nobel E-Commerce account have been created.`,
        html: html,
      };
      transporter.sendMail(mail_configs, async function (error, info) {
        if (error) {
          // console.log('not sent!!')
          return new InternalServerErrorException(`Error while sending`);
        }
        return resolve({
          message: 'Email sent successfully.',
        });
      });
    });
  }
}
