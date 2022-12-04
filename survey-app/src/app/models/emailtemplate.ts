export class EmailTemplate {
  emails: string[] = [];
  subject: string;
  content: string;

  constructor(emails: string[], subject: string, content: string) {
    this.emails = emails;
    this.subject = subject;
    this.content = content;
  }
}
