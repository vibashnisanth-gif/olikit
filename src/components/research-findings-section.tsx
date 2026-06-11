import { Card } from "./ui/card"

interface ResearchFindingsSectionProps {
  title?: string
  findings: { title: string; description: string; metric?: string }[]
}

export function ResearchFindingsSection({ title = "Research Findings", findings }: ResearchFindingsSectionProps) {
  return (
    <section>
      <h2 className="mb-5 text-2xl font-semibold tracking-tight text-text-primary">{title}</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        {findings.map((f, i) => (
          <Card key={i} hover>
            {f.metric && (
              <p className="text-3xl font-bold text-emerald-700 mb-2">{f.metric}</p>
            )}
            <h3 className="mb-1.5 text-base font-semibold text-text-primary">{f.title}</h3>
            <p className="text-sm leading-6 text-text-secondary">{f.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
