---
component: firstslide
componentProps:
    content:
        title: Basely - Content Creation Platform for Developers
        description: Basely is a free, open-source content creation platform for developers. Turn components into images/videos, and much more. Make developer process engaging.
        primaryButton: 
            title: Install basely
            href: /docs/introduction#installation
        secondaryButton:
            title: View Documentation
            href: /docs/introduction

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

        const nodeSupportImgSrc = await basely.baseline(
            "Node.js Support", 
            data,
        )
            .githubRelease("livesession/xyd", "0.1.0")
            .asset("node-support.png")
            .upload({download: true})

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