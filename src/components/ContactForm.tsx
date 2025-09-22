"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { data } from "@/lib/data";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Bitte geben Sie Ihren Namen ein.",
  }),
  email: z.string().email({
    message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
  }),
  company: z.string().optional(),
  message: z.string().min(10, {
    message: "Bitte beschreiben Sie Ihr Anliegen etwas genauer.",
  }),
});

export default function ContactForm() {
  const { toast } = useToast();
  const { headline, subline, privacyNote } = data.contact;
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted:", values);
    toast({
      title: "Anfrage erhalten!",
      description: "Vielen Dank. Wir werden uns in Kürze bei Ihnen melden.",
    });
    form.reset();
  }

  return (
    <section id="kontakt" className="bg-secondary/50" aria-labelledby="contact-headline">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="contact-headline">{headline}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{subline}</p>
        </div>

        <div className="mx-auto mt-16 max-w-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Max Mustermann" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-Mail</FormLabel>
                      <FormControl>
                        <Input placeholder="max@beispiel.de" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
               <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Firma (optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Musterfirma GmbH" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Was brauchen Sie?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Erzählen Sie uns von Ihrem Projekt, Ihren Zielen oder Ihrer Idee..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col items-center gap-4">
                <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                    {privacyNote}
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
