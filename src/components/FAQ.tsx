import { data } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
    const headline = "Häufig gestellte Fragen";
    const items = [
        { "q": "Ist die Erstellung der Website wirklich kostenlos?", "a": "Ja, die Konzeption, das Design und die technische Umsetzung deiner neuen Website sind vollständig kostenlos. Unser Geschäftsmodell basiert auf dem monatlichen Service-Abo, es gibt keine versteckten Setup-Gebühren." },
        { "q": "Gibt es eine Mindestvertragslaufzeit?", "a": "Nein, unser Abo ist monatlich kündbar. Wir sind davon überzeugt, dass du aufgrund des Werts und unseres Services bleibst, nicht wegen einer vertraglichen Bindung." },
        { "q": "Wem gehören die Inhalte und die Domain?", "a": "Alle Inhalte (Texte, Bilder) gehören jederzeit dir. Die Domain wird auf deinen Namen registriert. Bei einer Kündigung erhältst du auf Wunsch einen vollständigen Export deiner Website-Daten." },
        { "q": "Welche Art von Änderungen sind im Abo enthalten?", "a": "Kleinere redaktionelle Updates wie das Austauschen von Texten und Bildern sind je nach gebuchtem Paket im monatlichen Abo abgedeckt." },
        { "q": "Kann ich meine eigene Domain verwenden?", "a": "Ja, selbstverständlich. Wir helfen dir beim Umzug deiner bestehenden Domain oder bei der Registrierung einer neuen Wunschdomain."}
    ]

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
