import { StatCards } from './StatCards'
import { Viagens } from './Viagens'




export function ConteudoMain() {
    return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <StatCards />
            <Viagens />
        </main>
    )
}