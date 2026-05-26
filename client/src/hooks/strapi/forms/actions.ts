"use server";

import { fetchAPI } from "@/lib/api/fetch-api";
import { getStrapiURL } from "@/lib/api/get-strapi-url";
import { contactSchema } from "@/schema/zodSchema";

type ContactFormResult = {
  zodErrors: Record<string, string[]> | null;
  strapiErrors: string | null;
};

export async function sendContactForm(
  formData: FormData,
): Promise<ContactFormResult> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
    };
  }

  const { name, email, subject, message } = validatedFields.data;
  const url = new URL("/api/contacts", getStrapiURL()).href;

  const response = await fetchAPI(url, {
    method: "POST",
    body: {
      data: { name, email, subject, message },
    },
  });

  if (!response?.data) {
    const status = "status" in response ? response.status : "unknown";
    console.error("Strapi contact create failed:", response);
    return {
      zodErrors: null,
      strapiErrors: `Failed to save your message (${status}). Please try again.`,
    };
  }

  return {
    zodErrors: null,
    strapiErrors: null,
  };
}
