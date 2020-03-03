.PHONY: help dev build watch crawl clean install

PORT = 8000

# Color Variables
COM_COLOR 	= \033[0;34m
OBJ_COLOR 	= \033[0;36m
OK_COLOR 		= \033[0;32m
ERROR_COLOR = \033[0;31m
WARN_COLOR 	= \033[0;33m
NO_COLOR 		= \033[m

help: ## Affiche cette aide
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

dev: ## Lance le serveur de développement
	php -S localhost:$(PORT) -d display_errors=1

build: ## Compile les assets
	sass app.scss main.css --style=compressed

watch: ## Compile les assets avec un watcher
	sass app.scss main.css --watch
