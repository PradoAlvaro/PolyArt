import { HeartCrack, MousePointerClick } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <p>
        <HeartCrack className="h-8 w-9" />
      </p>
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <div className="text-accent-foreground">
        <span className="inline-flex items-center">
          Voltar para oㅤ
          <Link to="/" className="text-sky-500 dark:text-sky-400">
            <span>Dashboard</span>
          </Link>
          <MousePointerClick className="ml-2" />
        </span>
      </div>
    </div>
  )
}
