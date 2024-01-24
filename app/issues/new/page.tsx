"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";

const NewIssuePage = () => {
  const { Root, Input } = TextField;
  return (
    <div className="max-w-xl space-y-3">
      <Root>
        <Input placeholder="Title" />
      </Root>
      <TextArea placeholder="Description…" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
