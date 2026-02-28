import fs from "node:fs/promises";
import path from "node:path";
import Image from "next/image";

type ClientCategory = {
  folder: string;
  heading: string;
  orderedFiles?: string[];
};

type ClientLogo = {
  name: string;
  logo: string;
};

const categories: ClientCategory[] = [
  {
    folder: "BFSI",
    heading: "BFSI",
    orderedFiles: [
      "Bank of baroda.png",
      "canara bank.png",
      "cooperative bank.png",
      "ICICI.png",
      "IDBI Bank.png",
      "IIFL.png",
      "Indusind bank.png",
      "Innovision Clients sidbi.png",
      "Manapuram finance ltd.png",
      "SBI.png",
      "SIDBI.png",
      "Star health.png",
      "Union bank.png",
    ],
  },
  {
    folder: "CorporateOffice",
    heading: "Corporate Office",
    orderedFiles: [
      "Innovision Clients American Express.png",
      "Innovision Clients Colliers.png",
      "Innovision Clients Cushman & Wakefield.png",
      "Innovision Clients Genpact.png",
      "Innovision Clients Lava.png",
      "Innovision Clients Piramal.png",
      "Innovision Clients Protiviti.png",
      "Innovision Clients pwc.png",
      "Innovision Clients Reliance.png",
      "Innovision Clients Sodexo.png",
      "Innovision Clients TATA.png",
    ],
  },
  {
    folder: "EccommerceandRetail",
    heading: "Eccommerce and Retail",
    orderedFiles: [
      "bigbasket.png",
      "citykart.png",
      "metro.png",
      "oyo.png",
      "pepperfry.png",
      "Shoppers stop.png",
      "swiggy.png",
      "V2.png",
      "vbazaar.png",
      "vijay sales.png",
    ],
  },
  {
    folder: "EPC",
    heading: "EPC",
    orderedFiles: [
      "adani.png",
      "Cleanmax.png",
      "Emaar.png",
      "ESGEC.png",
      "L&T Construction.png",
      "SLK Global.png",
    ],
  },
  {
    folder: "FMCG",
    heading: "FMCG",
    orderedFiles: [
      "Ananda.png",
      "Bercos.png",
      "bigbasket.png",
      "Devbhog.png",
      "Dr oetkar.png",
      "farmer fresh.png",
      "redbull.png",
      "Tata consumer products.png",
      "verka.png",
    ],
  },
  {
    folder: "GovtandPSU",
    heading: "Govt and PSU",
    orderedFiles: [
      "cm office govt of rajasthan.png",
      "Govt of panjab.png",
      "GRSE.png",
      "markfed.png",
      "national higher education mission.png",
      "RISL.png",
      "sugar mills.png",
      "Tidel park.png",
      "Transport department haryan.png",
      "WBSEDCL.png",
    ],
  },
  {
    folder: "HospitalitiesandInfrastructure",
    heading: "Hospitalities and Infrastructure",
    orderedFiles: [
      "ashiana.png",
      "clarks inn.png",
      "country inns and suits.png",
      "oyo.png",
      "park inn.png",
      "radissson blue.png",
      "sarovar.png",
      "SOTC.png",
      "Stanza living.png",
    ],
  },
  {
    folder: "HospitalsandHealth",
    heading: "Hospitals and Health",
    orderedFiles: [
      "akash healthcare.png",
      "apollo.png",
      "artemis.png",
      "aurobindo.png",
      "care hospital.png",
      "Fortis.png",
      "gracure pharma.png",
      "max healthcare.png",
      "medeor.png",
      "national health mission.png",
      "nayati healthcare.png",
      "punjab health.png",
      "RH regency.png",
    ],
  },
  {
    folder: "MallandRetails",
    heading: "Mall and Retails",
    orderedFiles: [
      "Arvind fashioning.png",
      "Bercos.png",
      "blackberrys.png",
      "Great eastern.png",
      "Shoppers stop.png",
      "v bazaar.png",
    ],
  },
  {
    folder: "Manufacturing",
    heading: "Manufacturing",
    orderedFiles: [
      "Cipla.png",
      "IAC.png",
      "ITC.png",
      "Lux inner and casuals.png",
      "metalman.png",
      "modenik.png",
      "MRF.png",
      "Nidec.png",
      "Roca.png",
    ],
  },
  {
    folder: "MNCIndian",
    heading: "MNC Indian",
    orderedFiles: [
      "American express.png",
      "avaya.png",
      "axcend.png",
      "cairn.png",
      "capgemini.png",
      "colliers.png",
      "cushman and wakefield.png",
      "genpact.png",
      "LAVA.png",
      "piramal.png",
      "protiviti.png",
      "PWC.png",
      "reliance.png",
      "sodexo.png",
      "tata motors.png",
    ],
  },
  {
    folder: "others",
    heading: "Others",
    orderedFiles: [
      "DLF building.png",
      "DPS.png",
      "EMAAR.png",
      "GD goenka.png",
      "gracure.png",
      "IIT madras.png",
      "Innovision Clients Others Harayana Skill .png",
      "Innovision Clients Vista.png",
      "MAERSK.png",
      "Nuvoco.png",
      "orient cement.png",
      "shree cement.png",
      "synergy steels.png",
      "TASEC.png",
      "thirty six toyota.png",
      "Tower research capital.png",
      "transworld.png",
      "UFLEX.png",
      "videocon.png",
      "Y axis.png",
    ],
  },
  {
    folder: "powerandmanufacturing",
    heading: "Power and Manufacturing",
    orderedFiles: [
      "BSES.png",
      "Cleanmax.png",
      "Godrej properties.png",
      "greenK.png",
      "Gujarat gas.png",
      "L&T Construction.png",
      "M3M.png",
      "NHA.png",
      "reliance.png",
      "Vikran.png",
      "WBSEDCL.png",
    ],
  },
  {
    folder: "TrustedbyIndustryleaders",
    heading: "Trusted by Industry Leaders",
    orderedFiles: [
      "critica log.png",
      "gatikwe.png",
      "Jayem logistics.png",
      "sequel.png",
      "swiggy.png",
      "tvs electronics.png",
    ],
  },
  {
    folder: "warehouseandlogistics",
    heading: "Warehouse and Logistics",
    orderedFiles: [
      "Bajaj electricals.png",
      "fsc.png",
      "proconnect.png",
      "rivigo.png",
      "sequel.png",
      "shadowfax.png",
      "stellr.png",
      "tvs electronics.png",
    ],
  },
];

async function getLogos(folder: string, orderedFiles?: string[]): Promise<ClientLogo[]> {
  const directoryPath = path.join(process.cwd(), "public", "clients-page", folder);
  const files = await fs.readdir(directoryPath, { withFileTypes: true });

  const imageFiles = files
    .filter((entry) => {
      if (!entry.isFile()) {
        return false;
      }

      const extension = path.extname(entry.name).toLowerCase();
      return [".png", ".jpg", ".jpeg", ".webp", ".svg", ".avif"].includes(extension);
    });

  if (orderedFiles && orderedFiles.length > 0) {
    const fileMap = new Map(imageFiles.map((entry) => [entry.name.toLowerCase(), entry]));

    return orderedFiles
      .map((fileName) => fileMap.get(fileName.toLowerCase()))
      .filter((entry): entry is (typeof imageFiles)[number] => Boolean(entry))
      .map((entry) => ({
        name: entry.name.replace(/\.[^/.]+$/, ""),
        logo: `/clients-page/${folder}/${entry.name}`,
      }));
  }

  return imageFiles
    .sort((first, second) => first.name.localeCompare(second.name))
    .map((entry) => ({
      name: entry.name.replace(/\.[^/.]+$/, ""),
      logo: `/clients-page/${folder}/${entry.name}`,
    }));
}

export default async function Clients() {
  const categoryLogos = await Promise.all(
    categories.map(async (category) => ({
      ...category,
      logos: await getLogos(category.folder, category.orderedFiles),
    }))
  );

  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] py-24 text-neutral-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,43,45,0.06),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
            Our Clients
          </p>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Trusted By Leading Organizations
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-600">
            A snapshot of the brands and institutions that rely on Innovision
            for disciplined security and workforce excellence.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 bg-[#EF2B2D]" />
        </div>

        <div className="mt-16 space-y-14">
          {categoryLogos.map((category) => {
            const trackItems = [...category.logos, ...category.logos];

            return (
              <div key={category.folder}>
                <h3 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
                  {category.heading}
                </h3>

                <div className="relative mt-5 overflow-hidden">
                  <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#f7f7f5] to-transparent" />
                  <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#f7f7f5] to-transparent" />

                  {category.logos.length > 0 ? (
                    <div className="client-track">
                      {trackItems.map((client, index) => (
                        <div key={`${category.folder}-${client.name}-${index}`} className="logo-wrapper">
                          <Image
                            src={client.logo}
                            alt={client.name}
                            width={180}
                            height={90}
                            className="logo-image"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex h-24 items-center text-neutral-500">
                      Logos will be added here.
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}