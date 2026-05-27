"use client";

import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import { useRef, useState, type FormEvent } from "react";
import mailAnimation from "@/assets/mail.json";
import FadeIn from "@/components/motion/FadeIn";
import { sendContactForm } from "@/hooks/strapi/forms/actions";
import { contactSchema } from "@/schema/zodSchema";
import { ContactFormProps } from "@/types/strapi";
import { FiLoader } from "react-icons/fi";

type ContactForm = {
  id: string;
  greeting: string;
  message: string;
  buttonName: string;
  formFields: ContactFormProps[];
  lottieFile: any;
};

function getContactFormData(formData: FormData) {
  return {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };
}

type ContactFormState = {
  zodErrors: Record<string, string[]> | null;
  strapiErrors: string | null;
  errorMessage: string | null;
  successMessage: string | null;
};

const INITIAL_STATE: ContactFormState = {
  zodErrors: null,
  strapiErrors: null,
  errorMessage: null,
  successMessage: null,
};

function FieldErrors({ id, messages }: { id: string; messages?: string[] }) {
  if (!messages?.length) return null;

  return (
    <div id={id} className="mt-1 space-y-0.5">
      {messages.map((message, index) => (
        <p
          key={`${message}-${index}`}
          className="font-condensed text-sm text-red-400"
          role="alert"
        >
          {message}
        </p>
      ))}
    </div>
  );
}

export default function Contact({
  greeting,
  message,
  buttonName,
  formFields,
  lottieFile,
}: ContactForm) {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState(INITIAL_STATE);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setFormState(INITIAL_STATE);

    const formData = new FormData(formRef.current);

    const validatedFields = contactSchema.safeParse(
      getContactFormData(formData),
    );

    if (!validatedFields.success) {
      setFormState({
        ...INITIAL_STATE,
        zodErrors: validatedFields.error.flatten().fieldErrors,
      });
      setLoading(false);
      return;
    }

    const serviceId = process.env.EMAILJS_PUBLIC_SERVICE_ID;
    const templateId = process.env.EMAILJS_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFormState({
        ...INITIAL_STATE,
        errorMessage: "Something went wrong. Please try again.",
      });
      setLoading(false);
      return;
    }

    try {
      const result = await sendContactForm(formData);

      if (result?.zodErrors && Object.keys(result.zodErrors).length > 0) {
        setFormState({
          ...INITIAL_STATE,
          zodErrors: result.zodErrors,
        });
        return;
      }

      if (result?.strapiErrors) {
        setFormState({
          ...INITIAL_STATE,
          errorMessage: result.strapiErrors,
        });
        return;
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });
      setFormState({
        ...INITIAL_STATE,
        successMessage: "Message sent successfully!",
      });
      formRef.current.reset();
    } catch {
      setFormState({
        ...INITIAL_STATE,
        errorMessage: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
      setFormState(INITIAL_STATE);
    }
  };

  return (
    <section id="contact" className="section-pad min-h-[724px] bg-dark">
      <div className="mx-auto grid max-w-content items-center gap-12 px-5 lg:grid-cols-2">
        <FadeIn className="flex flex-col gap-12 p-5">
          <h2 className="text-5xl text-light md:text-[60px]">{greeting}</h2>
          <p className="text-xl text-light/90 md:text-[25px]">{message}</p>

          <form
            ref={formRef}
            noValidate
            onSubmit={handleSubmit}
            className="glass-panel space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1 block font-condensed text-sm text-light"
              >
                {formFields[0].label}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder={formFields[0].placeholder}
                className="form-field"
                aria-invalid={Boolean(formState.zodErrors?.name)}
                aria-describedby={
                  formState.zodErrors?.name ? "name-error" : undefined
                }
              />
              <FieldErrors
                id="name-error"
                messages={formState.zodErrors?.name}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block font-condensed text-sm text-light"
              >
                {formFields[1].label}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder={formFields[1].placeholder}
                className="form-field"
                aria-invalid={Boolean(formState.zodErrors?.email)}
                aria-describedby={
                  formState.zodErrors?.email ? "email-error" : undefined
                }
              />
              <FieldErrors
                id="email-error"
                messages={formState.zodErrors?.email}
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-1 block font-condensed text-sm text-light"
              >
                {formFields[2].label}
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder={formFields[2].label}
                className="form-field"
                aria-invalid={Boolean(formState.zodErrors?.subject)}
                aria-describedby={
                  formState.zodErrors?.subject ? "subject-error" : undefined
                }
              />
              <FieldErrors
                id="subject-error"
                messages={formState.zodErrors?.subject}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1 block font-condensed text-sm text-light"
              >
                {formFields[3].label}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder={formFields[3].placeholder}
                className="form-field resize-y"
                aria-invalid={Boolean(formState.zodErrors?.message)}
                aria-describedby={
                  formState.zodErrors?.message ? "message-error" : undefined
                }
              />
              <FieldErrors
                id="message-error"
                messages={formState.zodErrors?.message}
              />
            </div>

            {formState.successMessage && (
              <p className="text-center font-condensed text-sm text-main">
                {formState.successMessage}
              </p>
            )}
            {formState.errorMessage && (
              <p
                className="text-center font-condensed text-sm text-red-400"
                role="alert"
              >
                {formState.errorMessage}
              </p>
            )}

            <button type="submit" className="btn-form" disabled={loading}>
              {loading ? (
                <>
                  {buttonName}
                  <FiLoader className="animate-spin" />
                </>
              ) : (
                buttonName
              )}
            </button>
          </form>
        </FadeIn>

        <FadeIn delay={0.2} className="mx-auto w-full max-w-md">
          <Lottie animationData={lottieFile} loop />
        </FadeIn>
      </div>
    </section>
  );
}
