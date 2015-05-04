#
# Vars
#

NODE_BIN = ./node_modules/.bin

#
# Tasks
# 

validate:
	@${NODE_BIN}/standard

clean: 
	@rm node_modules/lib &> /dev/null || true

link: clean
	@ln -s ${PWD}/lib node_modules/lib

less:
	@${NODE_BIN}/lessc style.less > style.css

dev: link less
	@${NODE_BIN}/beefy index.jsx --live --open -- -t [reactify]



.PHONY: validate clean link dev less