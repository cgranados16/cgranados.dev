import {
  Button,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@cgranados.dev/ui';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className="container relative">
      <PageHeader>
        <PageHeaderHeading>Portfolio</PageHeaderHeading>
        <PageHeaderDescription>Welcome</PageHeaderDescription>
        <div className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
          <Button>Hello World</Button>
        </div>
      </PageHeader>
    </div>
  );
}
