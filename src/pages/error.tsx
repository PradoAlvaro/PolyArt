import { Frown, MousePointerClick } from 'lucide-react'
import { Link, useRouteError } from 'react-router-dom'

export function Error() {
  const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <p>
        <Frown className="h-8 w-9" />
      </p>
      <h1 className="text-4xl font-bold">Ops, algo de errado aconteceu...</h1>
      <p className="text-accent-foreground">
        {' '}
        Um erro aconteceu na aplicação, abaixo você encontra mais detalhes
      </p>
      <pre>{error?.message || JSON.stringify(error)}</pre>
      <div className="text-accent-foreground">
        <span className="inline-flex items-center">
          Voltar para{' '}
          <Link to="/" className="text-sky-500 dark:text-sky-400">
            <span> ...Dashboard</span>
          </Link>
          <MousePointerClick className="ml-2" />
        </span>
      </div>
    </div>
  )
}
