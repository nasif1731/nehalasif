import { Trophy, Medal, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    title: "Winner",
    subtitle: "Battle 1o1 Coding Competition",
    year: "2022",
    icon: Trophy,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    title: "Runner-up",
    subtitle: "Software Engineering Quiz (NasCon 2025)",
    year: "2025",
    icon: Award,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Honourable Mention",
    subtitle: "FAST MUN",
    year: "2023",
    icon: Award,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const medals = [
  { type: "Gold", semesters: ["Fall 2022", "Spring 2023", "Spring 2024", "Spring 2025"], color: "text-yellow-500" },
  { type: "Silver", semesters: ["Fall 2023", "Fall 2024"], color: "text-gray-400" },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full"></div>

          {/* Major Achievements */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-elegant transition-all hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-4 ${achievement.bgColor} rounded-full mb-4`}>
                    <achievement.icon className={achievement.color} size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-sm text-foreground/70 mb-2">{achievement.subtitle}</p>
                  <p className="text-xs text-muted-foreground">{achievement.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Academic Medals */}
          <Card className="shadow-card bg-gradient-subtle">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Medal className="text-primary" size={32} />
                <h3 className="text-2xl font-bold text-foreground">Academic Excellence</h3>
              </div>
              
              <div className="space-y-6">
                {medals.map((medal, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div className="flex items-center gap-2 min-w-[120px]">
                      <Medal className={medal.color} size={24} />
                      <span className={`text-lg font-bold ${medal.color}`}>{medal.type} Medals</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {medal.semesters.map((semester, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-card rounded-full text-sm text-foreground/80 shadow-sm"
                        >
                          {semester}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
