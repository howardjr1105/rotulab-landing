# Graph Report - rotulab-landing  (2026-06-05)

## Corpus Check
- 24 files · ~429,660 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 111 nodes · 89 edges · 26 communities (17 shown, 9 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7e157883`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]

## God Nodes (most connected - your core abstractions)
1. `ROTULAB - Landing Page Premium` - 8 edges
2. `scripts` - 7 edges
3. `Design System Master File` - 6 edges
4. `Global Rules` - 5 edges
5. `Component Specs` - 5 edges
6. `Services()` - 3 edges
7. `getIcon()` - 2 edges
8. `getNeonColors()` - 2 edges
9. `compilerOptions` - 2 edges
10. `paths` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (26 total, 9 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.12
Nodes (16): Additional Forbidden Patterns, Anti-Patterns (Do NOT Use), Buttons, Cards, Color Palette, Component Specs, Design System Master File, Global Rules (+8 more)

### Community 1 - "Community 1"
Cohesion: 0.22
Nodes (8): devDependencies, jest, jest-environment-jsdom, @testing-library/jest-dom, @testing-library/react, name, private, version

### Community 2 - "Community 2"
Cohesion: 0.22
Nodes (8): Arquitectura y Estructura del Proyecto, Configuración y Ejecución de Pruebas (TDD), Contratos de Datos e Integración Dinámica, Descripción del Negocio, Especificaciones del Diseño Visual, Instrucciones de Instalación y Levantamiento, ROTULAB - Landing Page Premium, Stack Tecnológico Empleado

### Community 3 - "Community 3"
Cohesion: 0.29
Nodes (7): scripts, build, dev, lint, start, test, test:watch

### Community 4 - "Community 4"
Cohesion: 0.33
Nodes (6): dependencies, framer-motion, lucide-react, next, react, react-dom

### Community 5 - "Community 5"
Cohesion: 0.40
Nodes (3): inter, metadata, montserrat

### Community 9 - "Community 9"
Cohesion: 0.83
Nodes (3): getIcon(), getNeonColors(), Services()

### Community 10 - "Community 10"
Cohesion: 0.50
Nodes (3): createJestConfig, customJestConfig, nextJest

### Community 11 - "Community 11"
Cohesion: 0.50
Nodes (3): compilerOptions, paths, @/*

## Knowledge Gaps
- **53 isolated node(s):** `metadata`, `montserrat`, `inter`, `metadata`, `metadata` (+48 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `scripts` connect `Community 3` to `Community 1`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Community 4` to `Community 1`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **What connects `metadata`, `montserrat`, `inter` to the rest of the system?**
  _53 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._