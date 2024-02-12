import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
declare const Accordion: React.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const AccordionTrigger: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const AccordionContent: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
