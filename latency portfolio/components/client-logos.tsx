import Image from 'next/image'

const clients = [
  {
    name: "Easy Skill",
    logo: "/logos/easy-skill.png"
  },
  {
    name: "Vexit IT",
    logo: "/logos/vexit.png"
  },
  {
    name: "Dribag Coffee",
    logo: "/logos/dribag.png"
  },
  {
    name: "AxCharge",
    logo: "/logos/axcharge.png"
  }
]

export function ClientLogos() {
  return (
    <div className="py-12">
      <h3 className="text-xl text-center text-muted-foreground mb-8">I&apos;VE DONE WORK FOR</h3>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {clients.map((client) => (
          <div key={client.name} className="relative w-32 h-12 grayscale hover:grayscale-0 transition-all">
            <Image
              src={client.logo}
              alt={client.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
} 