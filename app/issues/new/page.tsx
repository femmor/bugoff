"use client";

import { Button, TextField } from "@radix-ui/themes";
import SimpleMdeReact from "react-simplemde-editor";

const NewIssuePage = () => {
  const { Root, Input } = TextField;
  return (
    <div className="max-w-xl space-y-3">
      <Root>
        <Input placeholder="Title" />
      </Root>
      <SimpleMdeReact placeholder="Enter description..." />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
