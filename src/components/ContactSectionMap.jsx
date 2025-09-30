"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/config/contact";

export default function ContactSectionMap() {
  return (
    <section
      className="py-12 px-6 bg-gray-50 rounded-2xl shadow-lg"
      aria-labelledby="contact-section-title"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h2
            id="contact-section-title"
            className="text-2xl font-semibold mb-6"
          >
            Prefer a Direct Approach?
          </h2>
          <div className="flex flex-col">
            <div className="flex flex-row space-x-4">
              <Phone className="w-5 h-5 text-blue-600" aria-hidden="true" />
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="text-gray-700 hover:underline"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>
            <div className="flex flex-row space-x-4">
              <Mail className="w-5 h-5 text-blue-600" aria-hidden="true" />
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-gray-700 hover:underline"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>
        </div>

        {/* Office Location */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Visit Our Office</h3>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              {/* Google Maps Embed */}
              <iframe
                title="Office Location on Google Maps"
                src={CONTACT_INFO.mapsUrl}
                width="100%"
                height="350"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              ></iframe>

              {/* Address + Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border-t">
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin
                    className="w-5 h-5 text-blue-600"
                    aria-hidden="true"
                  />
                  <span>{CONTACT_INFO.address}</span>
                </div>
                <Button asChild>
                  <a
                    href={CONTACT_INFO.directionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get a Direction →
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
