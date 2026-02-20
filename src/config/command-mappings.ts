export type CommandMapping = {
      id: string;
      aliases: string[];
      templateId: number;
      templateType: "job" | "workflow";
      templateName?: string;
      extraVars?: Record<string, string>;
};

export const commandMappings: CommandMapping[] = [
      {
            id: "actualizacion-cyberpanel",
            aliases: [
                  "actualizacion cyberpanel",
                  "actualizar cyberpanel",
                  "upgrade cyberpanel",
                  "ejecutar actualizacion de cyberpanel",
                  "actualiza cyberpanel",
            ],
            templateId: 10,
            templateType: "job",
            templateName: "actualizacion-cyberpanel",
      },
      {
            id: "actualizacion-wordpress",
            aliases: [
                  "actualizacion wordpress",
                  "actualizar wordpress",
                  "mantenimiento wordpress",
                  "actualizar sitios web en wordpress",
                  "wordpress core plugins themes",
            ],
            templateId: 11,
            templateType: "job",
            templateName: "actualizacion-wordpress",
      },
      {
            id: "mantenimiento-preventivo-web",
            aliases: [
                  "mantenimiento preventivo servidores web",
                  "mantenimiento preventivo web",
                  "mantenimiento cyberpanel",
                  "mantenimiento servidores web",
                  "ejecutar mantenimiento preventivo",
            ],
            templateId: 9,
            templateType: "job",
            templateName: "mantenimiento-preventivo-web",
      },
      {
            id: "revision-maquinas-citrix",
            aliases: [
                  "revision de maquinas en citrix",
                  "revisar maquinas citrix",
                  "workflow citrix",
                  "ejecutar revision citrix",
                  "revision citrix",
            ],
            templateId: 17,
            templateType: "workflow",
            templateName: "revision-maquinas-citrix",
      },
      {
            id: "revision-servidor-agv",
            aliases: [
                  "revision de servidor agv",
                  "revision servidor agv",
                  "revisar agv",
                  "revisar aguv",
                  "workflow agv",
                  "revision de agvs",
            ],
            templateId: 22,
            templateType: "workflow",
            templateName: "revision-servidor-agv",
      },
];
