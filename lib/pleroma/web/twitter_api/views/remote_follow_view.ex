# Pleroma: A lightweight social networking server
# Copyright © 2017-2022 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Web.TwitterAPI.RemoteFollowView do
  use Pleroma.Web, :view
  import Phoenix.HTML.Form
  alias Pleroma.Web.Gettext

  defdelegate avatar_url(user), to: Pleroma.User
end
