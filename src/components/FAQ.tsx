import { data } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
    const { headline, items } = data.faq;
  return (
    <section aria-labelledby="faq-headline">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
            <h2 id="faq-headline">{headline}</h2>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {items.map((faqItem, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg hover:no-underline">
                        {faqItem.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                        {faqItem.a}
                    </AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
