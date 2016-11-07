.PHONY: build

install:
	@npm install
	
run:
	@echo "**************************************************"
	@echo "* open http://localhost:7777/webpack-dev-server/ *"
	@echo "**************************************************"
	##check: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
	##--optimize-minimize 
	@webpack-dev-server --host=0.0.0.0 --port=7777 --progress --colors --devtool cheap-module-inline-source-map --hot --inline
