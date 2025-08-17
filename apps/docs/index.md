---
component: firstslide
componentProps:
    content:
        title: Basely - Content Creation Platform for Developers
        description: Basely is a free, open-source content creation platform for developers. Turn components into images/videos, and more to make developer process more engaging.
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

        ```tsx Developer Badges
        import basely from 'basely'

        const data = [[{tool: "bun", supported: tue}]]

        const nodejsBaseline = await basely.badge.baseline
            .githubRelease("livesession/xyd", "0.1.0")
            .img("Node.js Support", data, "node-support.png")

        const nodeSupportImgSrc = await basely
            .githubRelease("livesession/xyd")
            .asset("node-support.png")
            .download()

        const README = `
            # Your Awesome Tool

            <img src="${nodeSupportImgSrc}"/>
        `
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