import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function StatCards() {
    return (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card className="sm:col-span-2">
                <CardHeader className="pb-3">
                    <CardTitle>Demonstrativo de Resultados</CardTitle>
                    <CardDescription className="max-w-lg text-balance leading-relaxed">
                        Explore nossos dashboards interativos!
                        Clique aqui para ter acesso a dados e insights em tempo real.
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button>Clique aqui</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader className="pb-2">
                    <CardDescription>Viagens este Mês</CardDescription>
                    <CardTitle className="text-4xl">1,329</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-xs text-muted-foreground">
                        +25% que último mês
                    </div>
                </CardContent>
                <CardFooter>
                    <Progress value={25} aria-label="25% increase" />
                </CardFooter>
            </Card>
            <Card>
                <CardHeader className="pb-2">
                    <CardDescription>KM Rodados este Mês</CardDescription>
                    <CardTitle className="text-4xl">95.329</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-xs text-muted-foreground">
                        +10% que último mês
                    </div>
                </CardContent>
                <CardFooter>
                    <Progress value={12} aria-label="12% increase" />
                </CardFooter>
            </Card>
        </div>
    )
}