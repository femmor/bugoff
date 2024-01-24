"use client";

import { Button, TextField } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

interface IssueFormProps {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueFormProps>();

  const { Root, Input } = TextField;
  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data);
        router.push(`/issues`);
      })}
    >
      <Root>
        <Input placeholder="Title" {...register("title")} name="title" />
      </Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => <SimpleMDE {...field} id="description" />}
      />
      <Button>Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
