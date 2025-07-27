---
component: firstslide
componentProps:
    content:
        title: Basely - Remote Components Rendering Library
        description: Basely is a free, open-source library that lets you render UI components as images—anywhere, instantly. Transform your React components into shareable, high-quality images for reports, social media, dashboards, and more. No more manual screenshots—just code, render, and share.
        primaryButton: 
            title: Install basely (coming soon)
            href: https://basely.dev
            disabled: true
        secondaryButton:
            title: View Documentation (coming soon)
            href: https://basely.dev
            disabled: true

    rightContent: |
        :::code-group
        ```tsx Send Engagement 
        import basely from 'basely'

        const data = metrics.last7Days()

        const last7DaysMetrics = await basely.img(
            "@livesession/design-system", 
            {
                import: "Metrics",
                props: data
            }
        )

        await slack.post(last7DaysMetrics)
        ```

        ```tsx Developer Badge
        import basely from 'basely'

        const data = basely.badge.baseline.download(
            github.release("livesession/xyd")
        )

        const nodejsBaseline = await basely.img.baseline(
            "Node.js Support", 
            data,
        )

        await github.readme(nodejsBaseline)
        ```

        ```tsx Your Own Components
        import basely from 'basely'

        const img = await basely.img(
            "@your-company/design-system", 
            {
                import: "YourComponent",
                props: {
                    title: "You can use your own components library"
                }
            }
        )
        ```
        :::
---