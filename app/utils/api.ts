export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.riamriam.org";

export interface ContactFormData {
  full_name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/donations/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
}
