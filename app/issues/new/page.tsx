"use client";

import { Button, Callout, TextField } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useState } from "react";

interface IssueFormProps {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueFormProps>();
  const [error, setError] = useState("");

  const { Root, Input } = TextField;
  return (
    <div className="max-w-xl">
      {error && (
        <>
          <Callout.Root color="red" className="mb-5">
            <Callout.Text>{error}</Callout.Text>
          </Callout.Root>
        </>
      )}
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push(`/issues`);
          } catch (error) {
            setError("An unexpected error occurred. Please try again later.");
          }
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
    </div>
  );
};

export default NewIssuePage;
