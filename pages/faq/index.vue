<template>
  <div class="max-w-[1255px] px-[20px] flex flex-col gap-5 mx-auto py-[50px]">
    <h1 class="text-[32px] font-bold ml-4">FAQs</h1>

    <Accordion>
      <AccordionPanel value="0">
        <AccordionHeader>1. How long does it take to process an order?</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            Orders are typically processed within [insert number of business days] after payment confirmation.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="1">
        <AccordionHeader>2. What are the available shipping options?</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            We offer various shipping options, including standard, expedited, and express shipping. The available
            options will be presented during the checkout process.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="2">
        <AccordionHeader>3. How long does shipping take?</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            Delivery times depend on the selected shipping method and the destination address. Please refer to the
            estimated delivery time provided during the checkout process.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="3">
        <AccordionHeader>4. Do you ship internationally?</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            We currently ship to addresses within [insert countries or regions where shipping is available]. If your
            shipping address is outside of this area, we apologize for any inconvenience caused.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="4">
        <AccordionHeader>5. Are there any additional customs fees or taxes for international orders?</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            International orders may be subject to customs duties, taxes, or import fees imposed by the destination
            country. These charges are the responsibility of the recipient and are not included in the product price or
            shipping cost.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="5">
        <AccordionHeader>6. What should I do if I receive an incorrect or damaged product?</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            If you receive an incorrect or damaged product, please contact our customer support team within [insert
            number of days] days of receiving the order. We will work to resolve the issue promptly.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="6">
        <AccordionHeader>7. Can I track my order?</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            Yes, most orders come with tracking information. You will receive a shipping confirmation email with
            tracking details once your order is shipped.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="7">
        <AccordionHeader>8. How do I update my shipping address?</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            Please ensure to provide an accurate and complete shipping address during the checkout process. If you need
            to update your shipping address after placing an order, please contact our customer support as soon as
            possible.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="8">
        <AccordionHeader>9. What are the accepted payment methods?</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            We accept various payment methods, including credit cards, debit cards, and online payment platforms. The
            available options will be displayed during the checkout process.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="9">
        <AccordionHeader>10. How can I contact customer support?</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            For any questions or concerns, please contact our customer support team using the provided contact
            information on our website. We are here to assist you
          </p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>