/**
 * Definición de tipos para los esquemas de Schema.org.
 * Esto garantiza que los datos estructurados sigan el estándar 
 * requerido por Google y las IAs.
 */

export interface OrganizationSchema {
  "@type": "Organization" | "InsuranceAgency";
  "@id": string;
  name: string;
  url: string;
  logo: {
    "@type": "ImageObject";
    url: string;
  };
  image?: string;
  description: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    "@type": "GeoCoordinates";
    latitude: string;
    longitude: string;
  };
  telephone: string;
  priceRange?: string;
  openingHoursSpecification?: {
    "@type": "OpeningHoursSpecification";
    dayOfWeek: string[];
    opens: string;
    closes: string;
  };
  sameAs?: string[];
}

export interface PersonSchema {
  "@type": "Person";
  "@id": string;
  name: string;
  jobTitle: string;
  image: string;
  worksFor: { "@id": string };
  description?: string;
}

export interface GraphSchema {
  "@context": "https://schema.org";
  "@graph": (OrganizationSchema | PersonSchema)[];
}