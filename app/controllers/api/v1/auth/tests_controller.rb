module Api
  module V1
    module Auth
      class TestsController < ApplicationController
        def get
          render :json => { status: 200, message: "Hello World" }
        end
      end
    end
  end
end